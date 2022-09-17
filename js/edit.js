var url = location.href.replace("http://", "");
var url2 = url.replace("https://", "");
var dominio = url2.split("/");
if (dominio[0] == cDominio) {
 
  // ----Const----
  // --Set--
  const setNameSite = document.querySelector(".name-site");
  const setFooterText = document.querySelector(".footer-text");
  const setDescriFooterText = document.querySelector(".descri-footer-text");

  // --Menu Text--
  const menuText1 = document.querySelector(".menu-text-1");
  const menuText2 = document.querySelector(".menu-text-2");
  const menuText3 = document.querySelector(".menu-text-3");
  const menuText4 = document.querySelector(".menu-text-4");

  // --Title Text--
  const titleText1 = document.querySelector(".title-text-1");
  const titleText2 = document.querySelector(".title-text-2");
  const titleText3 = document.querySelector(".title-text-3");
  const titleText4 = document.querySelector(".title-text-4");

  // --SubTitle Text--
  const subTitleText1 = document.querySelector(".subtitle-text-1");
  const subTitleText2 = document.querySelector(".subtitle-text-2");
  const subTitleText3 = document.querySelector(".subtitle-text-3");
  const subTitleText4 = document.querySelector(".subtitle-text-4");

  // --Description Text--
  const descriText1 = document.querySelector(".descri-text-1");
  const descriText2 = document.querySelector(".descri-text-2");
  const descriText3 = document.querySelector(".descri-text-3");
  const descriText4 = document.querySelector(".descri-text-4");

  // --Project Description Text--
  const proDescriText1 = document.querySelector(".pro-descri-text-1");
  const proDescriText2 = document.querySelector(".pro-descri-text-2");
  const proDescriText3 = document.querySelector(".pro-descri-text-3");

  // --Button--
  const btnText1 = document.querySelector(".btn-text-1");
  const btnText2 = document.querySelector(".btn-text-2");
  const btnText3 = document.querySelector(".btn-text-3");
  const btnText4 = document.querySelector(".btn-text-4");

  // --About--
  const aboutText1 = document.querySelector(".about-text-1");
  const aboutText2 = document.querySelector(".about-text-2");
  const aboutText3 = document.querySelector(".about-text-3");
  const aboutText4 = document.querySelector(".about-text-4");

  // ----Edit Text HTML----
  // --Set--
  setNameSite.innerHTML = setNameSiteVar;
  setFooterText.innerHTML = setFooterTextVar;
  setDescriFooterText.innerHTML = setDescriFooterTextVar;

  // --Menu Text--
  menuText1.innerHTML = menuText1Var;
  menuText2.innerHTML = menuText2Var;
  menuText3.innerHTML = menuText3Var;
  menuText4.innerHTML = menuText4Var;

  // --Title Text--
  titleText1.innerHTML = titleText1Var;
  titleText2.innerHTML = titleText2Var;
  titleText3.innerHTML = titleText3Var;
  titleText4.innerHTML = titleText4Var;

  // --SubTitle Text--
  subTitleText1.innerHTML = subTitleText1Var;
  subTitleText2.innerHTML = subTitleText2Var;
  subTitleText3.innerHTML = subTitleText3Var;
  subTitleText4.innerHTML = subTitleText4Var;

  // --Description Text--
  descriText1.innerHTML = descriText1Var;
  descriText2.innerHTML = descriText2Var;
  descriText3.innerHTML = descriText3Var;
  descriText4.innerHTML = descriText4Var;

  // --Project Description Text--
  proDescriText1.innerHTML = proDescriText1Var;
  proDescriText2.innerHTML = proDescriText2Var;
  proDescriText3.innerHTML = proDescriText3Var;

  // --Button--
  btnText1.innerHTML = btnText1Var;
  btnText2.innerHTML = btnText2Var;
  btnText3.innerHTML = btnText3Var;
  btnText4.innerHTML = btnText4Var;

  // --About--
  aboutText1.innerHTML = aboutText1Var;
  aboutText2.innerHTML = aboutText2Var;
  aboutText3.innerHTML = aboutText3Var;
  aboutText4.innerHTML = aboutText4Var;
} else {
  window.location.href = "https://" + cDominio;
}
