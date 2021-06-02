import { Capitalize } from "../../helpers";
import { ResultContainer, SummaryContainer } from "./styles";
import { SummaryData } from "./types";

export interface SummaryProps {
    summary?: SummaryData;
}

const Summary: React.FC<SummaryProps> = ({summary}) => {
    if (summary === undefined) return null;

    return (
        <SummaryContainer>
            <h2>Policy summary</h2>
            <ul>
                <li>Brand: {Capitalize(summary.data.brand)}</li>
                <li>Plan: {Capitalize(summary.data.plan)}</li>
                <li>Vehicle year: {summary.data.year}</li>
            </ul>

            <ResultContainer>
                Policy price: {summary.price}€
            </ResultContainer>
        </SummaryContainer>
    );
}

export default Summary;