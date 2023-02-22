import { Participant } from "./components/Participant";

const familia = ["Alexandre", "Francilene", "Ester", "Severina"];

export function Home() {
  function handleParticipantAdd() {
    console.log("hanleParticipantAdd");
  }

  return <Participant onClick={handleParticipantAdd} />;
}
