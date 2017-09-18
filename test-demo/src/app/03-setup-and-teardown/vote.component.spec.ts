import { VoteComponent } from './vote.component'; 



describe('VoteComponent', () => {
  let component;

  beforeEach(()=>{
      component = new VoteComponent();
  });
  //afterEach, beforeAll, afterAll
  it('should increment total votes when upvoted', () => {
    //Act
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement total votes when downvoted', () => {
    //Act
    component.downVote();
    //Assert
    expect(component.totalVotes).toBe(-1);
  });

});