/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.1d83b051-e2b1-4668-9aa8-a31c7226a349';

const SKILL_NAME = 'Space Facts';
const WELCOME_MESSAGE = 'Hello! I\'m your Chemi-Buddy. I can assist in converting chemical names of compounds to chemical formulae and vice versa. What do you wanna know?';
const HELP_MESSAGE = 'You can say ask me the chemical name of copper sulphate for example, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
const REPROMPT = 'Sorry! I didn\'t get that. What do you wanna know?';

const data = [
    {
        name : 'aluminum hydroxide',
        formula : 'Al(OH)3'
    },
    {
        name : 'acetic acid',
        formula : 'CH3COOH'
    },
    {
        name : 'acetone',
        formula : 'CH3COCH3'
    },
    {
        name : 'acetylene',
        formula : 'C2H2'
    },
    {
        name : 'aluminum oxide',
        formula : 'Al2O3'
    },
    {
        name : 'aluminum sulfate',
        formula : 'Al2(SO4)3'
    },
    {
        name : 'ammonia',
        formula : 'NH3'
    },
    {
        name : 'ammonium bicarbonate',
        formula : '(NH4)HCO3'
    },
    {
        name : 'ammonium carbonate',
        formula : '(NH4)2CO3'
    },
    {
        name : 'ammonium chloride',
        formula : 'NH4Cl'
    },
    {
        name : 'barium carbonate',
        formula : 'BaCO3'
    },
    {
        name : 'barium sulfate',
        formula : 'BaSO4'
    },
    {
        name : 'boric acid',
        formula : 'H3BO3'
    },
    {
        name : 'butane',
        formula : 'C4H10'
    },
    {
        name : 'cadmium sulfide',
        formula : 'CdS'
    },
    {
        name : 'calcium carbide',
        formula : 'CaC2'
    },
    {
        name : 'calcium carbonate',
        formula : 'CaCO3'
    },
    {
        name : 'calcium chloride',
        formula : 'CaCl2'
    },
    {
        name : 'calcium hydroxide',
        formula : 'Ca(OH)2'
    },
    {
        name : 'calcium hypochlorite',
        formula : 'Ca(ClO)2'
    },
    {
        name : 'calcium nitrate',
        formula : 'Ca(NO3)2'
    },
    {
        name : 'cadmium sulfide',
        formula : 'CdS'
    },
    {
        name : 'calcium oxide',
        formula : 'CaO'
    },
    {
        name : 'calcium sulfate',
        formula : 'CaSO4'
    },
    {
        name : 'carbon dioxide',
        formula : 'CO2'
    },
    {
        name : 'carbonic acid',
        formula : 'H2CO3'
    },
    {
        name : 'chromium oxide',
        formula : 'Cr2O3'
    },
    {
        name : 'glucose',
        formula : 'C6H12O6'
    },
    {
        name : 'hydrochloric acid',
        formula : 'HCl'
    },
    {
        name : 'hydrofluoric acid',
        formula : 'HF'
    },
    {
        name : 'hydrogen peroxide',
        formula : 'H2O2'
    },
    {
        name : 'ferric chloride',
        formula : 'FeCl3'
    },
    {
        name : 'ferric oxide',
        formula : 'Fe2O3'
    },
    {
        name : 'magnesium carbonate',
        formula : 'MgCO3'
    },
    {
        name : 'magnesium hydroxide',
        formula : 'Mg(OH)2'
    },
    {
        name : 'magnesium chloride',
        formula : 'MgCl2'
    },
    {
        name : 'manganese dioxide',
        formula : 'MnO2'
    },
    {
        name : 'methane',
        formula : 'CH4'
    },
    {
        name : 'methanol',
        formula : 'CH3OH'
    },
    {
        name : 'nitrous oxide',
        formula : 'N2O'
    },
    {
        name : 'oxygen',
        formula : 'O2'
    },
    {
        name : 'phosphoric acid',
        formula : 'H3PO4'
    },
    {
        name : 'potassium carbonate',
        formula : 'K2CO3'
    },
    {
        name : 'potassium bromide',
        formula : 'KBr'
    },
    {
        name : 'potassium chloride',
        formula : 'KCl'
    },
    {
        name : 'potassium dichromate',
        formula : 'K2Cr2O7'
    },
    {
        name : 'potassium hydroxide',
        formula : 'KOH'
    },
    {
        name : 'potassium nitrate',
        formula : 'KNO3'
    },
    {
        name : 'potassium permanganate',
        formula : 'KMnO4'
    },
    {
        name : 'silicon carbide',
        formula : 'SiC'
    },
    {
        name : 'silicon dioxide',
        formula : 'SiO2'
    },
    {
        name : 'sodium bicarbonate',
        formula : 'NaHCO3'
    },
    {
        name : 'sodium bromide',
        formula : 'NaBr'
    },
    {
        name : 'sodium carbonate',
        formula : 'Na2CO3'
    },
    {
        name : 'sodium chloride',
        formula : 'NaCl'
    },
    {
        name : 'sodium fluoride',
        formula : 'NaF'
    },
    {
        name : 'sodium nitrate',
        formula : 'NaNO3'
    },
    {
        name : 'sodium phosphate',
        formula : 'Na3PO4'
    },
    {
        name : 'sodium sulfate',
        formula : 'Na2SO4'
    },
    {
        name : 'urea',
        formula : 'H2NCONH2'
    },
    {
        name : 'zinc chloride',
        formula : 'ZnCl2'
    },
    {
        name : 'zinc oxide',
        formula : 'ZnO'
    },
    {
        name : 'zinc sulfate',
        formula : 'ZnSO4'
    },
    {
        name : 'water',
        formula : 'H2O'
    },
];

function getFormulaFromName(name){
 for(var i = 0; i < data.length; i++)
     if(data[i].name.toLowerCase() === name.toLowerCase())
         return data[i].formula;
 return '';
}

function getNameFromFormula(formula){
 for(var i = 0; i < data.length; i++)
     if(data[i].formula.toLowerCase() === formula.toLowerCase())
         return data[i].name;
 return '';
}

const handlers = {
    'LaunchRequest': function () {
        this.response.speak(WELCOME_MESSAGE).listen(REPROMPT);
        this.emit(':responseReady');
    },
    'NameToFormulaIntent': function () {
        const name = this.event.request.intent.slots.chemicalName.value
        const formula = getFormulaFromName(name);
        if(formula !== '')
            this.response.speak('The chemical formula of ' + name + ' is ' + '<say-as interpret-as="spell-out">' + formula + '</say-as>. What else do you wanna know?').listen(REPROMPT);
        else
            this.response.speak('Sorry I\'m still under developement.<audio src=\'soundbank://soundlibrary/cartoon/amzn_sfx_boing_long_1x_01\'/> What else do you wanna know?')
            .listen(REPROMPT);
        this.emit(':responseReady');
    },
    'FormulaToNameIntent': function () {
        var formula = this.event.request.intent.slots.chemicalFormula.resolutions.resolutionsPerAuthority[0].values;
        if(formula === undefined)
            formula = this.event.request.intent.slots.chemicalFormula.value;
        else
            formula = formula[0].value.name;
        const name = getNameFromFormula(formula);
        if(name !== '')
            this.response.speak('The chemical name of <say-as interpret-as="spell-out">' + formula + '</say-as> is ' + name + '. What else do you wanna know?').listen(REPROMPT);
        else
            this.response.speak('Sorry I\'m still under developement.<audio src=\'soundbank://soundlibrary/cartoon/amzn_sfx_boing_long_1x_01\'/> What else do you wanna know?')
            .listen(REPROMPT);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
