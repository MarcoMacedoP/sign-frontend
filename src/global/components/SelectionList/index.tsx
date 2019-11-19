import React from "react";
//components
import { SelectionCard, Loading } from "../";
//styled-components
import { H3 } from "../../styles/texts";
import { StyledModal, StyledSecondaryButton } from "./styles";

interface SelectionListProps {
  title: string;
  list: Array<any>;
  itemListKeys: ItemListKeys;
  onClose: Function | any;
  onSelection: Function | any;
  isOpen: boolean;
  isLoading: boolean;
}
interface ItemListKeys {
  about: string;
  id: string;
  title: string;
}

/**
 * Renders a modal with a specified list of items 
 * @param  title the title to b edisplayed on list
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
  return (
    <StyledModal onClose={onClose} isOpen={isOpen}>
      <H3>{title}</H3>
      {isLoading && <Loading size="1rem" />}
      {list.length > 0 &&
        list.map((item: any, index: number) => (
          <SelectionCard
            key={index}
            about={item[itemListKeys.about]}
            onSelect={() => onSelection(item[itemListKeys.id])}
            title={item[itemListKeys.title]}
          />
        ))}
      <StyledSecondaryButton onClick={onClose}>Cancelar</StyledSecondaryButton>
    </StyledModal>
  );
};
