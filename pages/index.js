function home() {
  return (
    <div>
      <h1>Site da Andressa Cirilo Nutricionista!!</h1>
      <h2>
        Olá, seja bem-vindo ao meu site! Sou a Andressa Cirilo, nutricionista
        apaixonada por ajudar as pessoas a alcançarem uma vida mais saudável e
        equilibrada. Aqui, você encontrará dicas de alimentação, receitas
        saudáveis e informações sobre nutrição para melhorar sua qualidade de
        vida. Fique à vontade para explorar o site e entrar em contato comigo
        para agendar uma consulta ou tirar dúvidas. Juntos, podemos alcançar
        seus objetivos de saúde e bem-estar!
      </h2>
      <a
        href="https://wa.me/5527997925297?text=Olá%20Andressa,%20gostaria%20de%20agendar%20uma%20consulta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Chamar no WhatsApp
        </button>
      </a>
    </div>
  );
}

export default home;
