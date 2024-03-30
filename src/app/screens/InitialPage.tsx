import SPlus from "@assets/images/sPlus";
import CameraT from "components/Camera/Camera";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import React from "react";

export default function InitialPage() {
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 10 }}>Saude Plus</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Gestão Inteligente de Saúde
            </RegularText>
        </MainContainer>
    );
}
