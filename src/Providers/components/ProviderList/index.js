import React from "react";
// Components
import {PictureCard, List} from "../../../global/components/";
import {Link} from "react-router-dom";
//hooks
import {useEffect, useState} from "react";

// Styled Components
import {BigList} from "../../../global/styles/Lists";
//redux
import {connect} from "react-redux";
import {
  fetchProviders,
  setShouldFetchProviders
} from "../../../global/redux/actions/providers";

function ProviderList({
  providers,
  setShouldFetchProviders,
  fetchProviders
}) {
  const {
    shouldFetchProviders,
    loadingProviders,
    errorOnGetProviders
  } = providers.status;
  //fetch providers
  useEffect(() => {
    if (shouldFetchProviders && !loadingProviders) {
      fetchProviders();
      setShouldFetchProviders(false);
    }
  }, [shouldFetchProviders]);
  //handle errors
  const [error, setError] = useState(null);
  useEffect(() => setError(errorOnGetProviders), [
    errorOnGetProviders
  ]);
  const setErrorToNull = () => setError(null);

  return (
    <List
      title="Proveedores"
      isLoading={loadingProviders}
      error={error}
      onErrorClose={setErrorToNull}
    >
      <BigList>
        {providers.list.map(
          ({provider_id, name, lastname, image_url, about}) => (
            <Link
              key={provider_id}
              to={`/app/providers/${provider_id}`}
            >
              <PictureCard
                title={`${name} ${lastname}`}
                picture={image_url}
                description={about}
              />
            </Link>
          )
        )}
      </BigList>
    </List>
  );
}
const mapStateToProps = state => ({
  providers: state.providers
});
export default connect(
  mapStateToProps,
  {fetchProviders, setShouldFetchProviders}
)(ProviderList);
