// Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = () => {
  let resp = [];
  emailListInData.forEach((email) => resp.push(`O email ${email} está cadastrado em nosso banco de dados!`));
  return resp;
};

console.log(showEmailList());