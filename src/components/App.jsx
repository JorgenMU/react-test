import "../App.css";
import Ansattkort from "./Ansattkort";

function App() {
  let ansatte =[
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
    {
      navn: "Knut Eivind Brennhaug", 
      tlf: "123456789", 
      epost: "Kunt@tillermail.com"},
    { 
      navn: "Roar Gjerde",
      tlf: "4363456789",
      epost: "Roar@tillermail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "4345766789",
      epost: "BentErik@tillermail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "56746789",
      epost: "Jon@tillermail.com"
    },
    {
      navn: "Håvard Heggem",
      tlf: "5674r4565434565453426789",
      epost: "Håvard@tillermail.com"
    },
  ];
  return (
    <div className="h-screen bg-slate-800">
      <h1 className="text-4xl text-center text-white py-5">Ansatte på tiller</h1>
      <div className="grid h-screen bg-slate-800 grid-cols-3 ">

        {ansatte.map(ansatte =>(
          <Ansattkort navn={ansatte.navn} tlf={ansatte.tlf} epost={ansatte.epost}/>
        ))}
      </div>
    </div>
  );
}

export default App;
