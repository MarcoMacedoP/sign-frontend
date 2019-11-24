import React from "react";
// Components
import { PictureCard, List } from "../../../global/components/";
import { Redirect } from "react-router-dom";
//hooks
import { useEffect, useState } from "react";

// Styled Components
import { GridList } from "../../../global/styles/Lists";
//redux
import { connect } from "react-redux";
import { fetchProviders } from "../../../global/redux/actions/providers";
//utils
import { ADD_PROVIDER_ROUTE } from "../../../global/utils/routes";
function ProviderList({ providers, fetchProviders }) {
  const {
    shouldFetchProviders,
    loadingProviders,
    errorOnGetProviders
  } = providers.status;
  //fetch providers
  useEffect(() => {
    if (shouldFetchProviders && !loadingProviders) {
      fetchProviders();
    }
  }, [shouldFetchProviders]);
  //handle errors
  const [error, setError] = useState(null);
  useEffect(() => setError(errorOnGetProviders), [errorOnGetProviders]);
  const setErrorToNull = () => setError(null);
  //handle redirects
  const [redirectToAddProvider, setRedirectToAddProvider] = useState(false);
  const setRedirectTrue = () => {
    console.log("onAddButtonClick");
    setRedirectToAddProvider(true);
  };
  return (
    <List
      title="Proveedores"
      isLoading={loadingProviders}
      error={error}
      onErrorClose={setErrorToNull}
      onAddButtonClick={setRedirectTrue}
      isEmpty={providers.list.length === 0}
      infoDisplayedOnEmpty={{
        message: "Parece qué aún no tienes proveedores",
        callToAction: "¿Qué tal si agregas uno para comenzar?"
      }}
    >
      {providers.list.length !== 0 && (
        <GridList>
          {providers.list.map(
            ({ provider_id, name, lastname, image_url, about }) => (
              <PictureCard
                key={provider_id}
                to={`/app/providers/${provider_id}`}
                title={`${name} ${lastname}`}
                picture={image_url}
                description={about}
              />
            )
          )}
        </GridList>
      )}
      {redirectToAddProvider && <Redirect to={ADD_PROVIDER_ROUTE} />}
    </List>
  );
}
const mapStateToProps = state => ({
  providers: state.providers
});
export default connect(mapStateToProps, { fetchProviders })(ProviderList);
