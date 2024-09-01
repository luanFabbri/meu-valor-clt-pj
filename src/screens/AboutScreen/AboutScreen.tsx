import React from "react";

import CustomButton from "../../components/Inputs/CustomButton/CustomButton";
import View from "../../components/Tags/View/View";
import Text from "../../components/Tags/Text/Text";

import { styles } from "./AboutScreen.styles";

const AboutScreen: React.FC = () => {
  const handleBuyCoffee = () => {
    console.log("Buy coffee");
  };

  return (
    <View customStyle={styles.container}>
      <Text customStyle={styles.title}>
        Seu Valor CLT/PJ, v1.0.0 por Luan Fabbri.
      </Text>

      <Text customStyle={styles.paragraph}>
        Este webapp foi desenvolvido por um desenvolvedor independente cansado
        de quebrar a cabeça convertendo manualmente seu salário de CLT para PJ
        (e vice-versa), para saber se uma oportunidade vale a pena ou não. Se
        ele foi útil para você em algum momento, de alguma forma, poderia
        considerar me pagar um café? Eu ficaria muito agradecido!
      </Text>

      <CustomButton
        text="Buy me a coffee!"
        onPress={handleBuyCoffee}
        customStyle={styles.button}
      />

      <Text customStyle={styles.paragraph}>
        Em breve trarei novas aplicações de diversos tópicos como jogos,
        finanças, desenvolvimento e etc. Fique atento ao meu git, e se quiser
        entrar em contato para possíveis projetos, ou se quiser fazer uma
        proposta para que eu faça parte de sua equipe, pode me encontrar pelo
        meu LinkedIn.
      </Text>

      <Text customStyle={styles.paragraph}>Obrigado!</Text>
    </View>
  );
};

export default AboutScreen;
