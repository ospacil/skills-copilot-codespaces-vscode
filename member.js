function skillsMember() {
  // Get the member ID from the URL
  const memberId = getMemberId();
  
  // Get the member's skills
  const memberSkills = getMemberSkills(memberId);
  
  // Display the member's skills
  displayMemberSkills(memberSkills);
}