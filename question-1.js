function solution(record) {
    var answer = [];
    let command = [];
    let user = {};

    for(let i = 0; i < record.length; i++){
      command.push(record[i].split(' '));
      switch(command[i][0]){
        case 'Enter':
          user[command[i][1]] = command[i][2];
          break;
        case 'Leave':
          break;
        case 'Change':
          user[command[i][1]] = command[i][2];
          break;  
      }
    }

    for(let i = 0; i < command.length; i++){
      switch(command[i][0]){
        case 'Enter':
          answer.push(user[command[i][1]] +' came in.');
          break;
        case 'Leave':
          answer.push(user[command[i][1]] +' has left');
          break; 
      }
    }
    
    console.log(answer);
    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]);

