function skillsMember() {
  return new Promise((resolve, reject) => {
    const member = new Member();
    member.getSkills()
      .then(skills => {
        resolve(skills);
      })
      .catch(err => {
        reject(err);
      });
  });
}