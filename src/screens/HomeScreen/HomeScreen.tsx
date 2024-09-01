import React from "react";

import View from "../../components/Tags/View/View";
import Text from "../../components/Tags/Text/Text";
import CustomButton from "../../components/Inputs/CustomButton/CustomButton";

import { styles } from "./HomeScreen.styles";

const HomeScreen: React.FC = () => {
  return (
    <View customStyle={styles.container}>
      <View>
        <Text customStyle={styles.heading}>Seu valor CLT/PJ</Text>
        <Text customStyle={styles.paragraph}>
          Descubra o valor do seu salário convertido de CLT para PJ e
          vice-versa!
        </Text>
      </View>
      <View>
        <View>
          <CustomButton
            text="Quero converter CLT para PJ"
            onPress={() => console.log("clt->pj")}
          />
        </View>
        <View>
          <CustomButton
            text="Quero converter PJ para CLT"
            onPress={() => console.log("pj->clt")}
          />
        </View>
      </View>
      <View>
        <CustomButton
          text="Informações do WebApp + contato"
          onPress={() => console.log("go to about")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
