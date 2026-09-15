import { imageDimensions } from "./image-dimensions";

const checkout = "https://pay.kirvano.com/1d6cfd46-2839-46f2-9f6e-015fc6db5877";


function Button({ children }: { children: React.ReactNode }) {
  return <div className="button-wrap"><a className="cta utmify-ic" data-checkout="kirvano" href={checkout} target="_blank" rel="noopener noreferrer">{typeof children === "string" ? children.toLocaleUpperCase("pt-BR") : children}</a></div>;
}


function Picture({ src, alt, size = "medium", eager = false }: { src: string; alt: string; size?: "small" | "medium" | "large" | "full"; eager?: boolean }) {
  const [width, height] = imageDimensions[src];
  const responsive = `/assets/responsive/${src.replace('.webp', '-720.webp')}`;
  return <div className={`picture ${size}`}><img src={`/assets/${src}`} srcSet={`${responsive} 720w, /assets/${src} ${width}w`} sizes="(max-width: 760px) calc(100vw - 32px), 620px" alt={alt} width={width} height={height} loading={eager ? "eager" : "lazy"} decoding="async" fetchPriority={eager ? "high" : "auto"} /></div>;
}


const benefits = [
  ["+200 flashes florais", "Mais de 200 artes em estilo fineline, do mais minimalista ao mais composto."],
  ["PDF organizado", "Arquivo pronto para abrir no celular, tablet ou computador."],
  ["Pronto para mostrar", "Artes prontas para apresentar diretamente às clientes no atendimento."],
  ["Base para adaptar", "Combine, ajuste ou redimensione conforme cada atendimento."],
  ["Acesso imediato", "Liberado logo após a compra, sem esperar liberação."],
  ["Uso no seu estúdio", "Use quantas vezes quiser nos seus atendimentos."],
];


const uses = [
  ["uso-01-atendimento.webp", "No atendimento presencial", "Abre o PDF no tablet, mostra a categoria que a cliente pediu e deixa ela escolher com o desenho na frente."],
  ["uso-02-whatsapp.webp", "No WhatsApp", "Manda três ou quatro opções antes da sessão e a cliente já chega decidida."],
  ["uso-03-redes-v2.webp", "Nas redes sociais", "Usa os flashes como oferta de disponibilidade e atrai quem já sabe o que quer."],
];


const objections = [
  ["objecao-01.webp", '"Vou parecer que copio?"', "Flash é prática comum e valorizada no mercado. A cliente escolhe uma arte pronta sabendo disso, e você ainda ajusta ao corpo dela. Tatuador com catálogo é visto como organizado, não como copiador."],
  ["objecao-02.webp", '"Já tenho referências no Pinterest"', "Referência solta não é acervo. Você não pode tatuar o desenho de outro artista, e cada print precisa ser redesenhado. Aqui as artes são feitas para uso nos seus atendimentos."],
  ["objecao-03.webp", '"200 é muito, vou usar tudo isso?"', "Não precisa. Mas com 200 opções você sempre tem o floral certo para o pedido que aparecer, do mais minimalista ao mais composto."],
];


export default function Home() {
  return <main>
    <header className="hero section center"><div className="wide">
      <span className="eyebrow">Acesso imediato • Estilo fineline</span>
      <Picture src="hero-flashes-v2.webp" alt="Tablet com mais de 200 flashes florais fineline, folhas impressas e braço tatuado" eager />
      <h1><span><em>+200</em> flashes Florais</span><strong>Fineline</strong></h1>
      <p className="lead white">Prontos para mostrar. A cliente escolhe. A sessão começa.</p>
      <p className="sublead">Um PDF com mais de 200 artes florais delicadas para apresentar às suas clientes, acelerar a decisão e parar de desenhar do zero em todo atendimento.</p>
      <div className="price"><b>por <em>R$ 27,90</em></b><span>pagamento único</span></div>
      <Button>Quero acessar os +200 flashes agora</Button><p className="secure">Compra segura via Kirvano · Acesso liberado na hora</p>
    </div></header>


    <section className="section alt"><div className="narrow"><h2>Você reconhece essa cena?</h2>
      <Picture src="dor-tatuadora.webp" alt="Tatuadora cansada desenhando flores no caderno com relógio ao fundo" size="large" />
      <p>A cliente chega dizendo <strong>"quero uma florzinha delicada"</strong>. Você pergunta qual flor, ela não sabe. Pergunta o tamanho, ela diz "pequena". Pergunta o estilo, ela mostra três prints do Pinterest que não têm nada a ver um com o outro.</p>
      <p>Aí começa a parte que ninguém paga: você senta, abre o iPad ou o caderno e passa 40 minutos criando opções para uma tatuagem de R$250. Quando termina, ela quer "algo entre a segunda e a terceira". Mais 20 minutos.</p>
      <blockquote>Você não está cobrando pelo tempo de desenho. Está cobrando pela tatuagem. E cada atendimento que começa do zero é lucro saindo pela porta.</blockquote>
    </div></section>


    <section className="section center"><div className="narrow"><h2>Quem tem acervo pronto fecha mais rápido</h2><Picture src="antes-depois.webp" alt="Comparação antes e depois: desenhar do zero versus escolher no acervo pronto" size="full" /><p>Tatuador que mostra opções na hora passa segurança. A cliente vê 15 flashes florais, aponta dois, você ajusta um detalhe e agenda. O que era uma hora de indecisão vira dez minutos de escolha.</p><p>Não é sobre parar de criar. É sobre ter uma base pronta para os pedidos que se repetem toda semana, e guardar sua criatividade para os projetos que realmente pedem desenho autoral.</p><Button>Quero meu acervo pronto</Button></div></section>


    <section className="section alt center"><div className="wide"><h2>Tudo o que vem no acervo</h2><Picture src="acervo-flashes-v2.webp" alt="Mais de 200 possibilidades em um único acervo de flashes florais fineline" size="large" /><div className="cards">{benefits.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><Button>Quero acessar os +200 flashes</Button></div></section>


    <section className="section center"><div className="wide"><h2>Três jeitos de colocar o acervo para trabalhar</h2><p className="section-note">Já no próximo cliente.</p><div className="uses">{uses.map(([src,title,text]) => <article key={title}><Picture src={src} alt={title} size="full"/><h3>{title}</h3><p>{text}</p></article>)}</div><Button>Quero usar no meu próximo cliente</Button></div></section>


    <section className="section alt center"><div className="wide"><h2>Esse material é para você?</h2><div className="audience"><article><h3>É para você se:</h3><ul className="yes"><li>Você tatua ou está começando e ainda não tem um acervo próprio</li><li>Você atende clientes que pedem florais delicados com frequência</li><li>Você perde tempo criando opções para pedidos simples</li><li>Você quer passar mais profissionalismo na hora de mostrar referências</li></ul></article><article><h3>Não é para você se:</h3><ul className="no"><li>Você trabalha só com projetos autorais e nunca faz flash</li><li>Você procura um curso de desenho (isso aqui é acervo pronto, não aula)</li></ul></article></div><Button>É para mim, quero garantir</Button></div></section>


    <section className="section"><div className="narrow"><h2 className="center">Talvez você esteja pensando...</h2><div className="objections">{objections.map(([src,title,text]) => <article key={title}><Picture src={src} alt={title} size="small"/><h3>{title}</h3><p>{text}</p></article>)}</div><Button>Quero garantir meus +200 flashes</Button></div></section>


    <section className="section offer center"><div className="narrow"><h2>Faça a conta</h2><Picture src="quanto-vale-30min-v2.webp" alt="Quanto vale 30 minutos do seu atendimento: acervo por R$ 27,90"/><p>Se o acervo economizar 30 minutos em um único atendimento, ele já se pagou. Em um mês, são horas devolvidas para tatuar mais, ou simplesmente para sair mais cedo do estúdio.</p><div className="price"><b>por <em>R$ 27,90</em></b><span>pagamento único</span></div><Button>Quero garantir meus +200 flashes</Button><p className="secure">Compra segura via Kirvano · Acesso imediato</p></div></section>


    <section className="section center"><div className="narrow"><div className="guarantee"><strong>7</strong><span>dias</span></div><h2>Risco zero para você</h2><p>Você tem 7 dias para abrir o material, usar nos atendimentos e decidir. Se não fizer sentido para o seu estúdio, pede o reembolso direto pela Kirvano e recebe tudo de volta.</p><Button>Quero testar sem risco</Button></div></section>


    <section className="section alt"><div className="narrow"><h2 className="center">Ainda tem dúvidas?</h2><details><summary>Como recebo o material?</summary><p>Por e-mail, logo após a confirmação do pagamento, com acesso pela área de membros da Kirvano.</p></details><details><summary>Funciona no celular?</summary><p>Sim. É um PDF comum, abre em qualquer aparelho.</p></details><details><summary>Posso usar em quantas clientes quiser?</summary><p>Sim, o acervo é seu para usar nos atendimentos do seu estúdio.</p></details><details><summary>O pagamento é seguro?</summary><p>Sim, todo o processo é feito pela Kirvano, com os meios de pagamento disponíveis no checkout.</p></details></div></section>


    <section className="section final center"><div className="narrow"><Picture src="cta-final-v2.webp" alt="+200 flashes florais fineline por R$ 27,90"/><h2>Pare de começar do zero no próximo atendimento</h2><p className="sublead">Mais de 200 flashes florais fineline, acesso imediato, por R$ 27,90.</p><Button>Quero acessar os +200 flashes agora</Button><p className="secure">Compra segura via Kirvano</p></div></section><footer>© 2026 · Todos os direitos reservados</footer>
  </main>;
}