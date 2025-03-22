const role = 'manager';

if (role == 'manager'){
    console.log('Менеджер');
}else if (role == 'admin'){
    console.log('Админ');
}else if (role == 'ceo'){
    console.log('CEO');
}else{
    console.log('I dont know you');
}

switch (role){
    case 'manager':
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    default:
        console.log('I don`t know you');
}