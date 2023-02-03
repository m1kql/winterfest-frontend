export default {
  SET_PROBLEMS(state: any, problems: any) {
    state.problems = [];
    problems.forEach((problem: any) => {
      state.problems.push({
        problemId: problem.id,
        problemTitle: problem.problemTitle,
        problemStatement: problem.problemStatement,
        sampleInput: problem.sampleInput,
        sampleOutput: problem.sampleOutput,
        tags: problem.tags,
        difficulty: problem.difficulty,
        submission: problem.submission,
      });
    });
  },
  SET_PROBLEM(state: any, problem: any) {
    state.problem = {
      problemId: problem.id,
      problemTitle: problem.problemTitle,
      problemStatement: problem.problemStatement,
      sampleInput: problem.sampleInput,
      sampleOutput: problem.sampleOutput,
      tags: problem.tags,
      difficulty: problem.difficulty,
      submission: problem.submission,
    };
  }
}