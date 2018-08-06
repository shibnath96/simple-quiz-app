import { QuestionsModelModule } from './questions-model.module';

describe('QuestionsModelModule', () => {
  let questionsModelModule: QuestionsModelModule;

  beforeEach(() => {
    questionsModelModule = new QuestionsModelModule();
  });

  it('should create an instance', () => {
    expect(questionsModelModule).toBeTruthy();
  });
});
