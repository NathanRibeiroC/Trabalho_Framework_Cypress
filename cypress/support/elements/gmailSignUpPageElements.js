class googlePageElements {
    urlGooglePage = () => { return 'https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp' }
    nameInput = () => { return 'input[id = firstName]'}
    lastNameInput = () => { return 'input[id = lastName]'}
    userNameInput = () => { return 'input[id = username]'}
    passwordInput = () => { return 'input[name = Passwd]'}
    passwordConfirmInput = () => { return 'input[name = ConfirmPasswd]'}
    botaoProxima = () => { return '#accountDetailsNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d'}    
    notificacaoExceptionSenha = () => { return '[jsname="B34EJ"] > span'}
  }
  
  export default googlePageElements;