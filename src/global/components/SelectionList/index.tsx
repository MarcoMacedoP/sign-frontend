import React from "react";
//components
import { SelectionCard, Loading, SmallEmptyState } from "../";
//styled-components
import { H3 } from "../../styles/texts";
import { StyledModal } from "./styles";

export interface SelectionListPropsBaseProps {
  onClose: Function | any;
  onSelection: Function | any;
  isOpen: boolean;
  isLoading: boolean;
}

export interface SelectionListProps extends SelectionListPropsBaseProps {
  title?: string;
  list: Array<any>;
  itemListKeys: ItemListKeys;
}
interface ItemListKeys {
  about: string;
  id: string;
  title: string;
}

/**
 * Renders a modal with a specified list of items 
 * @param  title the title to be displayed on list
   @param list the list to be maped on modal
   @param isLoading if true shows a loading icon
   @param  onClose function to be called modal close
   @param  isOpen indicates if list is open
   @param {ItemListKeys} itemListKey indicate some values to open in each item list 
   @param onSelection the function to be called when an item is selected. it will send the id on itemListKey as argument 
 */
export const SelectionList: React.FC<SelectionListProps> = ({
  title,
  list,
  isLoading,
  onClose,
  isOpen,
  itemListKeys,
  onSelection
}) => {
  const handleSelection = (id: any) => {
    onSelection(id);
    onClose();
  };
  const emptyStateMessage = title
    ? `Tu lista de ${title.toLocaleLowerCase()} parece estar vacía`
    : "Ups, esto parece vacío.";

  const emptyStateCallToAction = title
    ? `¿Que tal si vas a tu lista de ${title.toLocaleLowerCase()} y agregas uno?`
    : "¿Qué tal si agregas algo en tu lista antes de continuar?";

  return (
    <StyledModal onClose={onClose} isOpen={isOpen}>
      <H3>{title}</H3>
      {isLoading && <Loading size="1rem" />}
      {list && list.length > 0 ? (
        list.map((item: any, index: number) => (
          <SelectionCard
            key={index}
            about={item[itemListKeys.about]}
            onSelect={() => handleSelection(item[itemListKeys.id])}
            title={item[itemListKeys.title]}
          />
        ))
      ) : (
        <SmallEmptyState
          message={emptyStateMessage}
          callToAction={emptyStateCallToAction}
        />
      )}
    </StyledModal>
  );
};
