const {_saveQuestionAnswer} = require("../util/_DATA");
describe("_saveQuestionAnswer", () => {
    it("test for correct parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "am8ehyc8byjqgar0jgpub9",
            answer: "optionTwo"
        });

        expect(response).toBeTruthy();
    });

    it("test for false parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: undefined,
            answer: "optionTwo"
        }).catch(e => e);

        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
});
