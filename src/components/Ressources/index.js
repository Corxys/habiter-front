import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

const Ressources = () => {
  const { t } = useTranslation();

  return (
    <div className="ressources">
      <h1 className="ressources__title">
        { t('resources.title') }
      </h1>
      <div className="ressources__list">
        <div className="ressources__item">
          <span className="ressources__item--italic">Agenda for the protection of cross-border displaced persons in the context of disasters and climate change.</span> The Nansen Initiative, 5 Oct. 2015.
          <br />
          <a href="https://www.nanseninitiative.org/wp-content/uploads/2015/10/Agenda-Final-Draft.pdf"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.nanseninitiative.org/wp-content/uploads/2015/10/Agenda-Final-Draft.pdf
          </a>
        </div>
        <div className="ressources__item">
          The Anthropocene Atlas of Geneva (TAAG), <span className="ressources__item--italic">Hannah Entwisle Chapuisat</span>.
          <br />
          <a href="https://head.hesge.ch/taag/en/interview/hannah-entwisle-chapuisat-2/#the-impetus-for-the-nansen-initiative"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.head.hesge.ch/taag/en/interview/hannah-entwisle-chapuisat-2/#the-impetus-for-the-nansen-initiative
          </a>
        </div>
        <div className="ressources__item">
          Displacement: Uncertain Journeys.
          <br />
          <a href="https://www.displacementjourneys.org/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.displacementjourneys.org
          </a>
        </div>
        <div className="ressources__item">
          Environmental migration portal.
          <br />
          <a href="https://environmentalmigration.iom.int/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.environmentalmigration.iom.int/
          </a>
        </div>
        <div className="ressources__item">
          Global Protection Cluster, <span className="ressources__item--italic">Protection in Natural Disasters</span>.
          <br />
          <a href="https://www.globalprotectioncluster.org/themes/protection-in-natural-disasters/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.globalprotectioncluster.org/themes/protection-in-natural-disasters/
          </a>
        </div>
        <div className="ressources__item">
          Internal Displacement Monitoring Centre.
          <br />
          <a href="https://www.internal-displacement.org/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.internal-displacement.org
          </a>
        </div>
        <div className="ressources__item">
          International Federation of the Red Cross and Red Crescent Societies. <span className="ressources__item--italic">The Cost of Doing Nothing: The Humanitarian Price of Climate Change and How It Can Be Avoided</span>, IFRC, 2019.
          <br />
          <a href="https://media.ifrc.org/ifrc/wp-content/uploads/2019/09/2019-IFRC-CODN-EN.pdf"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.media.ifrc.org/ifrc/wp-content/uploads/2019/09/2019-IFRC-CODN-EN.pdf 
          </a>
        </div>
        <div className="ressources__item">
          International Organization for Migration, <span className="ressources__item--italic">Migration, Environment and Climate Change (MECC) Division</span>.
          <br />
          <a href="https://www.iom.int/migration-and-climate-change"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.iom.int/migration-and-climate-change
          </a>
        </div>
        <div className="ressources__item">
          IOM, Environmental Migration Portal.
          <br />
          <a href="https://environmentalmigration.iom.int/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.environmentalmigration.iom.int
          </a>
        </div>
        <div className="ressources__item">
          The Intergovernmental Panel on Climate Change.
          <br />
          <a href="https://www.ipcc.ch/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.ipcc.ch
          </a>
        </div>
        <div className="ressources__item">
          IPCC, 2012: <span className="ressources__item--italic">Managing the Risks of Extreme Events and Disasters to Advance Climate Change Adaptation (SREX).</span> A Special Report of Working Groups I and II of the Intergovernmental Panel on Climate Change [Field, C.B., V. Barros, T.F. Stocker, D. Qin, D.J. Dokken, K.L. Ebi, M.D. Mastrandrea, K.J. Mach, G.-K. Plattner, S.K. Allen, M. Tignor, and P.M. Midgley (eds.)]. Cambridge University Press, Cambridge, United Kingdom and New York, NY, USA, 582 pp.
          <br />
          <a href="https://archive.ipcc.ch/report/srex/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.archive.ipcc.ch/report/srex
          </a>
        </div>
        <div className="ressources__item">
          KNOMAD.
          <br />
          <a href="https://www.knomad.org/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.knomad.org
          </a>
        </div>
        <div className="ressources__item">
          Lyons, Kate. <span className="ressources__item--italic">Climate refugees can't be returned home, says landmark UN human rights ruling</span>, The guardian, 20 Jan. 2020.
          <br />
          <a href="https://www.knomad.org/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.knomad.org
          </a>
        </div>
        <div className="ressources__item">
          Martinez, Marta Rodriguez, and Lillo Montalto Monella. Extreme Weather Exiles: <span className="ressources__item--italic">How Climate Change Is Making European Migrants,</span> Euronews, 17 June 2020.
          <br />
          <a
            href="https://www.euronews.com/2020/02/26/extreme-weather-exiles-how-climate-change-is-turning-europeans-into-migrants"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.euronews.com/2020/02/26/extreme-weather-exiles-how-climate-change-is-turning-europeans-into-migrants
          </a>
        </div>
        <div className="ressources__item">
          Mutter, John. <span className="ressources__item--italic">The Disasters Profiteers. How Natural Disasters Make the Rich ­Richer and the Poor Even Poorer,</span> Palgrave Macmillan, 2015.
        </div>
        <div className="ressources__item">
          The Nansen Initiative.
          <br />
          <a
            href="https://www.nanseninitiative.org"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.nanseninitiative.org
          </a>
        </div>
        <div className="ressources__item">
          Piguet, Etienne. Asile et réfugiés, Repenser la protection. PPUR, 2019.
        </div>
        <div className="ressources__item">
          Platform on Disaster Displacement.
          <br />
          <a
            href="https://www.disasterdisplacement.org/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.disasterdisplacement.org
          </a>
        </div>
        <div className="ressources__item">
          Rigaud, Kanta Kumari; de Sherbinin, Alex; Jones, Bryan; Bergmann, Jonas; Clement, Viviane; Ober, Kayly; Schewe, Jacob; Adamo, Susana; McCusker, Brent; Heuser, Silke; Midgley, Amelia. 2018. <span className="ressources__item--italic">Groundswell : Preparing for Internal Climate Migration.</span> World Bank, Washington, DC.
          <br />
          <a
            href="https://openknowledge.worldbank.org/handle/10986/29461/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.openknowledge.worldbank.org/handle/10986/29461
          </a>
        </div>
        <div className="ressources__item">
          UNDRR, Sendai Framework for Disaster Risk Reduction 2015-2030.
          <br />
          <a
            href="https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030
          </a>
        </div>
        <div className="ressources__item">
          UNFCCC, <span className="ressources__item--italic">Task Force on Displacement</span>.
          <br />
          <a
            href="https://unfccc.int/process/bodies/constituted-bodies/WIMExCom/TFD#eq-1/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.unfccc.int/process/bodies/constituted-bodies/WIMExCom/TFD#eq-1
          </a>
        </div>
        <div className="ressources__item">
          UN General Assembly, <span className="ressources__item--italic">International Covenant on Civil and Political Rights</span>, 16 December 1966, United Nations, Treaty Series, vol. 999, p. 171.
          <br />
          <a
            href="https://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.ohchr.org/en/professionalinterest/pages/ccpr.aspx
          </a>
        </div>
        <div className="ressources__item">
          UN General Assembly, <span className="ressources__item--italic">Universal Declaration of Human Rights</span>, 10 December 1948, 217 A (III).
          <br />
          <a
            href="https://www.refworld.org/docid/3ae6b3712c.html"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.refworld.org/docid/3ae6b3712c.html 
          </a>
        </div>
        <div className="ressources__item">
          UNHCR, <span className="ressources__item--italic">Climate Change and Disaster Displacement</span>.
          <br />
          <a
            href="https://www.unhcr.org/climate-change-and-disasters.html"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.unhcr.org/climate-change-and-disasters.html
          </a>
        </div>
        <div className="ressources__item">
          United Nations Central Emergency Response Fund.
          <br />
          <a
            href="https://cerf.un.org/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.cerf.un.org
          </a>
        </div>
        <div className="ressources__item">
          United Nations Framework Convention on Climate Change.
          <br />
          <a
            href="https://unfccc.int/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.unfccc.int
          </a>
        </div>
        <div className="ressources__item">
          United Nations Office for the Coordination of Human Affairs.
          <br />
          <a
            href="https://www.unocha.org/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.unocha.org
          </a>
        </div>
        <div className="ressources__item">
          United Nations Office for Disaster Risk Reduction.
          <br />
          <a
            href="https://www.undrr.org/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.undrr.org/
          </a>
        </div>
        <div className="ressources__item">
          UN International Covenant on Civil and Political Rights, <span className="ressources__item--italic">Views adopted by the Committee under article 5 (4) of the Optional Protocol, concerning communication No. 2728/2016</span>, UN Human Rights Committee, CCPR/C/127/D/2728/2016 (23 September 2020).
          <br />
          <a
            href="https://tbinternet.ohchr.org/_layouts/15/treatybodyexternal/Download.aspx?symbolno=CCPR%2fC%2f127%2fD%2f2728%2f2016&Lang=en/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.tbinternet.ohchr.org/_layouts/15/treatybodyexternal/Download.aspx?symbolno=CCPR%2fC%2f127%2fD%2f2728%2f2016&Lang=en
          </a>
        </div>
        <div className="ressources__item">
          UN International Covenant on Civil and Political Rights, <span className="ressources__item--italic">Views adopted by the Committee under article 5 (4) of the Optional Protocol, concerning communication No. 2728/2016</span>, UN Human Rights Committee, CCPR/C/127/D/2728/2016 (23 September 2020).
          <br />
          <a
            href="https://tbinternet.ohchr.org/_layouts/15/treatybodyexternal/Download.aspx?symbolno=CCPR%2fC%2f127%2fD%2f2728%2f2016&Lang=en/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.tbinternet.ohchr.org/_layouts/15/treatybodyexternal/Download.aspx?symbolno=CCPR%2fC%2f127%2fD%2f2728%2f2016&Lang=en
          </a>
        </div>
        <div className="ressources__item">
          UNOCHA, Centre for Humanitarian Data.
          <br />
          <a
            href="https://centre.humdata.org/what-we-do/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.centre.humdata.org/what-we-do/
          </a>
        </div>
        <div className="ressources__item">
          UNOCHA, Global Humanitarian Overview 2021.
          <br />
          <a
            href="https://www.unocha.org/global-humanitarian-overview-2021/"
            target="_blank"
            rel="noreferrer"
            className="ressources__item__link"
          >
            www.unocha.org/global-humanitarian-overview-2021 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ressources;