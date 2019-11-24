import React from "react";
// Components
import { PictureCard, List } from "../../../global/components";
import { Redirect } from "react-router-dom";
//hooks
import { useEffect} from "react";
import {useError, useRedirect} from "../../../global/hooks/"
// Styled Components
import { GridList } from "../../../global/styles/Lists";
//redux
import { connect } from "react-redux";
import { fetchProviders } from "../../../global/redux/actions/providers";
//utils
import { ProvidersState } from "../../../global/redux/reducers/providers";
import { ADD_PROVIDER_ROUTE } from "../../../global/utils/routes";

function ProviderList({ providers, fetchProviders }:{providers: ProvidersState, fetchProviders: Function}) {
  const {getProviders} = providers.status;
  //fetch providers
  useEffect(() => {
    if (getProviders.shouldFetch && getProviders.status !== "loading") {
      fetchProviders();
    }
  }, [getProviders]);
  //handle errors
  const {error, setErrorToNull} = useError({
    updateErrorOnChange: getProviders.errorDetails
  })
  //handle redirects
  const {isRedirect, route, toggleRedirect} = useRedirect();
  const redirectToAddProvider = ()=> toggleRedirect(ADD_PROVIDER_ROUTE);
  return (
    <List
      title="Proveedores"
      isLoading={getProviders.status === "loading"}
      error={error}
      onErrorClose={setErrorToNull}
      onAddButtonClick={redirectToAddProvider}
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
      {isRedirect && <Redirect to={route} />}
    </List>
  );
}
const mapStateToProps = (state:any) => ({
  providers: state.providers
});
export default connect(mapStateToProps, { fetchProviders })(ProviderList);
