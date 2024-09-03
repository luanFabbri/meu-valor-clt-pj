import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./QuestionsScreen.styles";
import CustomTextInput from "../../components/Inputs/CustomTextInput/CustomTextInput";
import CustomButton from "../../components/Inputs/CustomButton/CustomButton";
import CustomSelect from "../../components/Inputs/CustomSelect/CustomSelect";
import Text from "../../components/Tags/Text/Text";

interface QuestionData {
  salary?: number;
  vaVr?: number;
  workHours?: number;
  typeContract?: string;
  workDays?: number;
  vt?: boolean;
  workCommuteCost?: number;
  workCommuteTime?: number;
  sellVacation?: boolean;
  plr?: boolean;
  plrSalaryNumber?: number;
}

interface QuestionsScreenProps {
  cltparapj?: boolean;
}

const QuestionsScreen: React.FC<QuestionsScreenProps> = ({
  cltparapj = false,
}) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState<QuestionData>({});

  if (!cltparapj) {
    return <Text customStyle={styles.maintenanceText}>Em manutenção</Text>;
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const handleInputChange = (key: keyof QuestionData, value: any) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleFinalSubmit = () => {
    console.log("Dados Finais:", data);
    navigate("/result", { state: data });
  };

  const slides = [
    {
      component: (
        <>
          <CustomTextInput
            label="Qual seu salário?"
            type="currency-brl"
            customStyle={styles.input}
            placeholder="Insira seu salário"
            ID="salary"
            text={data.salary?.toString()}
            onChange={(value) => handleInputChange("salary", value)}
          />
          <CustomButton
            text="Próximo"
            onPress={() =>
              data.salary ? handleNextSlide() : alert("Insira um valor válido!")
            }
          />
        </>
      ),
    },
    {
      component: (
        <>
          <CustomTextInput
            label="Qual o valor do seu VA/VR? Se tiver os dois, some-os."
            type="currency-brl"
            customStyle={styles.input}
            placeholder="Insira o valor"
            ID="va-vr"
            text={data.vaVr?.toString() || "0"}
            onChange={(value) => handleInputChange("vaVr", value)}
          />
          <div style={styles.buttonRow}>
            <CustomButton text="Voltar" onPress={handlePreviousSlide} />
            <CustomButton text="Próximo" onPress={handleNextSlide} />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomTextInput
            label="Quantas horas você trabalha por semana, não considerando extra?"
            type="number"
            customStyle={styles.input}
            placeholder="Horas de trabalho"
            ID="work-hours"
            text={data.workHours?.toString()}
            onChange={(value) => handleInputChange("workHours", value)}
          />
          <div style={styles.buttonRow}>
            <CustomButton text="Voltar" onPress={handlePreviousSlide} />
            <CustomButton
              text="Próximo"
              onPress={() =>
                data.workHours
                  ? handleNextSlide()
                  : alert("Insira um valor válido!")
              }
            />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomSelect
            label="Qual o tipo da sua contratação?"
            options={[
              { label: "Presencial", value: "p" },
              { label: "Híbrido", value: "h" },
              { label: "Home Office", value: "ho" },
            ]}
            customStyle={styles.select}
            ID="type-contract"
            onChange={(value) => handleInputChange("typeContract", value)}
          />
          <div style={styles.buttonRow}>
            <CustomButton text="Voltar" onPress={handlePreviousSlide} />
            <CustomButton
              text="Próximo"
              onPress={() => {
                if (data.typeContract === "p") {
                  setCurrentSlide(5);
                } else if (data.typeContract === "ho") {
                  setCurrentSlide(8);
                } else {
                  handleNextSlide();
                }
              }}
            />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomTextInput
            label="Quantos dias você trabalha presencialmente?"
            type="number"
            customStyle={styles.input}
            placeholder="Dias de trabalho"
            ID="work-days"
            text={data.workDays?.toString()}
            onChange={(value) => handleInputChange("workDays", value)}
          />
          <div style={styles.buttonRow}>
            <CustomButton text="Voltar" onPress={handlePreviousSlide} />
            <CustomButton
              text="Próximo"
              onPress={() =>
                data.workDays
                  ? handleNextSlide()
                  : alert("Insira um valor válido!")
              }
            />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomSelect
            label="Você usa VT?"
            options={[
              { label: "Sim", value: "s" },
              { label: "Não", value: "n" },
            ]}
            customStyle={styles.select}
            ID="vt"
            onChange={(value) => handleInputChange("vt", value === "s")}
          />
          <div style={styles.buttonRow}>
            <CustomButton
              text="Voltar"
              onPress={() => setCurrentSlide(data.typeContract === "p" ? 3 : 4)}
            />
            <CustomButton text="Próximo" onPress={handleNextSlide} />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomTextInput
            label="Quanto você gastaria por dia, em média, no transporte indo e voltando do trabalho?"
            type="currency-brl"
            customStyle={styles.input}
            placeholder="Custo de transporte"
            ID="work-commute-cost"
            text={data.workCommuteCost?.toString() || "0"}
            onChange={(value) => handleInputChange("workCommuteCost", value)}
          />
          <div style={styles.buttonRow}>
            <CustomButton text="Voltar" onPress={handlePreviousSlide} />
            <CustomButton text="Próximo" onPress={handleNextSlide} />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomTextInput
            label="Quanto tempo você gastaria, em média, no transporte?"
            type="number"
            customStyle={styles.input}
            placeholder="Tempo de transporte"
            ID="work-commute-time"
            text={data.workCommuteTime?.toString()}
            onChange={(value) => handleInputChange("workCommuteTime", value)}
          />
          <div style={styles.buttonRow}>
            <CustomButton text="Voltar" onPress={handlePreviousSlide} />
            <CustomButton
              text="Próximo"
              onPress={() =>
                data.workCommuteTime
                  ? handleNextSlide()
                  : alert("Insira um valor válido!")
              }
            />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomSelect
            label="Pretende vender parte das suas férias?"
            options={[
              { label: "Sim", value: "s" },
              { label: "Não", value: "n" },
            ]}
            customStyle={styles.select}
            ID="sell-vacation"
            onChange={(value) =>
              handleInputChange("sellVacation", value === "s")
            }
          />
          <div style={styles.buttonRow}>
            <CustomButton
              text="Voltar"
              onPress={() => setCurrentSlide(data.typeContract === "h" ? 3 : 4)}
            />
            <CustomButton text="Próximo" onPress={handleNextSlide} />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomSelect
            label="E PLR? Você costuma receber?"
            options={[
              { label: "Sim", value: "s" },
              { label: "Não", value: "n" },
            ]}
            customStyle={styles.select}
            ID="plr"
            onChange={(value) => handleInputChange("plr", value === "s")}
          />
          <div style={styles.buttonRow}>
            <CustomButton text="Voltar" onPress={handlePreviousSlide} />
            <CustomButton
              text="Próximo"
              onPress={() =>
                data.plr ? handleNextSlide() : handleFinalSubmit()
              }
            />
          </div>
        </>
      ),
    },
    {
      component: (
        <>
          <CustomTextInput
            label="E são quantos salários normalmente você recebe de PLR? A média são 2."
            type="number"
            customStyle={styles.input}
            placeholder="Número de salários"
            ID="plr-salary-number"
            text={data.plrSalaryNumber?.toString()}
            onChange={(value) => handleInputChange("plrSalaryNumber", value)}
          />
          <div style={styles.buttonRow}>
            <CustomButton text="Voltar" onPress={handlePreviousSlide} />
            <CustomButton
              text="Próximo"
              onPress={() =>
                data.plrSalaryNumber
                  ? handleFinalSubmit()
                  : alert("Insira um valor válido!")
              }
            />
          </div>
        </>
      ),
    },
  ];

  return <div style={styles.container}>{slides[currentSlide].component}</div>;
};

export default QuestionsScreen;
