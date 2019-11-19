import * as React from "react";
//hooks
import { useEffect } from "react";
import { useError } from "../../../global/hooks";
//redux
import { fetchProviders } from "../../../global/redux/actions/providers";
import { connect } from "react-redux";
//components
import {
  SelectionList,
  SelectionListPropsBaseProps
} from "../../../global/components/SelectionList";

interface ProvidersListSelectionProps extends SelectionListPropsBaseProps {
  providers: Array<any>;
  shouldFetchProviders: boolean;
  fetchProviders: Function;
  isLoading: boolean;
  errorOnFetch: boolean | string;
}

function ProvidersListSelection(props: ProvidersListSelectionProps) {
  const {
    isOpen,
    onClose,
    onSelection,
    shouldFetchProviders,
    isLoading,
    errorOnFetch,
    fetchProviders,
    providers
  } = props;
  const { error } = useError({
    updateErrorOnChange: errorOnFetch
  });

  useEffect(() => {
    if (shouldFetchProviders) {
      fetchProviders();
    }
  }, [shouldFetchProviders]);

  useEffect(() => {
    error && console.error(error);
  }, [error]);

  return (
    <SelectionList
      onSelection={onSelection}
      onClose={onClose}
      isOpen={isOpen}
      isLoading={isLoading}
      itemListKeys={{
        about: "email",
        id: "provider_id",
        title: "name"
      }}
      list={providers}
      title="Proveedores"
    />
  );
}

const mapStateToProps = ({ providers }: { providers: any }) => {
  const providersList = providers.list;
  const shouldFetchProviders = providers.status.shouldFetchProviders;
  const errorOnFetch = providers.status.errorOnGetProviders;
  const isLoading = providers.status.loadingProviders;
  return {
    providers: providersList,
    shouldFetchProviders,
    status,
    errorOnFetch,
    isLoading
  };
};

export default connect(mapStateToProps, { fetchProviders })(
  ProvidersListSelection
);
