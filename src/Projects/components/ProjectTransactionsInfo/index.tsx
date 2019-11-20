import * as React from "react";
import { H3, H4 } from "../../../global/styles/texts";
import { moment } from "../../../global/libs/moment";

//styled components
import {
  StyledLoading,
  StyledContainer,
  StyledHeader,
  StyledSection,
  StyledTransactionList,
  StyledTransaction,
  StyledTransactionValue,
  StyledTransactionDate,
  StyledTransactionIcon,
  StyledTransactionName
} from "./styles";
//TODO : DELETE ON SERVER ACTUALLY WORKING
import { mockedServerResponse } from "./mock";

interface TransactionInterface {
  _id: string;
  name: string;
  description?: string;
  addedToProjectDate: Date | string;
  value: number;
  type: "income" | "expense";
}

interface Expense extends TransactionInterface {
  costPerHour?: boolean;
}

interface ProjectTransactionsInfoProps {
  projectId: string;
  expenses?: Array<Expense>;
  incomes?: Array<TransactionInterface>;
}

//When the server is actully used remove isLoading and the expenses/incomes state,
//instead read it from props
export const ProjectTransactionsInfo: React.FC<ProjectTransactionsInfoProps> = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <StyledContainer>
      <StyledHeader>
        <H3>Ingresos / Egresos</H3>
        <p>Aquí se encuentra detallado el estado financiero del proyecto. </p>
      </StyledHeader>
      {isLoading ? (
        <StyledLoading />
      ) : (
        <StyledSection>
          <article>
            <H4>Egresos</H4>
            <StyledTransactionList>
              {mockedServerResponse.expenses.map(expense => (
                <Transaction
                  key={expense._id}
                  _id={expense._id}
                  addedToProjectDate={expense.addedToProjectDate}
                  description={expense.description}
                  name={expense.name}
                  value={expense.value}
                  type="expense"
                />
              ))}
            </StyledTransactionList>
          </article>
          <article>
            <H4>Ingresos</H4>
            <StyledTransactionList>
              {mockedServerResponse.incomes.map(income => (
                <Transaction
                  key={income._id}
                  _id={income._id}
                  addedToProjectDate={income.addedToProjectDate}
                  description={income.description}
                  name={income.name}
                  value={income.value}
                  type="income"
                />
              ))}
            </StyledTransactionList>
          </article>
        </StyledSection>
      )}
    </StyledContainer>
  );
};

const Transaction: React.FC<TransactionInterface> = props => {
  return (
    <StyledTransaction>
      <StyledTransactionName>
        <StyledTransactionIcon
          type={props.type}
          icon={props.type === "income" ? "attach_money" : "money_off"}
        />
        {props.name}
      </StyledTransactionName>
      <StyledTransactionValue type={props.type}>
        {props.value}$
      </StyledTransactionValue>
      <StyledTransactionDate>
        {moment(props.addedToProjectDate).format("LLL")}
      </StyledTransactionDate>
    </StyledTransaction>
  );
};
