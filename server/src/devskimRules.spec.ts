import {DevSkimRules} from "./devskimRules";
import {DevSkimWorkerSettings} from "./devskimWorkerSettings";
import {RuleValidator} from "./ruleValidator";
import {IConnection} from "vscode-languageserver";
import {IDevSkimSettings} from "./devskimObjects";

jest.mock("./ruleValidator");
// jest.mock("./devskimWorkerSettings");
jest.mock('vscode-languageserver', )

describe('DevSkimRules', () => {
    let mockedRuleValidator: RuleValidator;
    let mockedSettings: IDevSkimSettings;
    let mockedConnection: IConnection;
    let dsr: DevSkimRules;
    let rd: string;

    beforeAll(() => {
        // process.env.DEV_SKIM_RULES_DIRECTORY = ruleDir;
        // `C:/Users/v-dakit/DevSkimRules`;
        rd = DevSkimWorkerSettings.getRulesDirectory();
        mockedRuleValidator = new RuleValidator(null, '', '');
        mockedConnection = Object.create(null) as IConnection;
    });

    it('is created', async () => {
        dsr = new DevSkimRules(mockedConnection, mockedSettings, mockedRuleValidator);
        expect(dsr.rulesDirectory).toBe(rd);
    });

});