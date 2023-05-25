const apiUrl = "https://www.coursehubiitg.in/api/codingweek/contributions";

fetch(apiUrl)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Request failed with status code: " + res.status);
        }
    })
    .then(data => {
        const arrData = [];

        for (let x in data) {
            
            arrData[x] = (data[x].points);

        }

        arrData.sort(function (a, b) { return b - a });
        const arrNames = [];
        const arrAvatar = [];
        let index = arrData.indexOf()
        for (let y in data) {
            let index = arrData.indexOf(data[y].points, 0);
            arrNames[index] = data[y].name;
            arrAvatar[index] = data[y].avatar;
        }
        
        let  imga = document.createElement('img');    
        imga.src = arrAvatar[1];
        imga.classList = 'fit2';  
        document.getElementsByClassName('second2')[0].appendChild(imga);
        document.getElementsByClassName('second3')[0].innerHTML=`${arrNames[1]} &#183; ${arrData[1]}`;

        let  imgb = document.createElement('img');    
        imgb.src = arrAvatar[0];
        imgb.classList = 'fit3';  
        document.getElementsByClassName('first2')[0].appendChild(imgb);
        document.getElementsByClassName('first3')[0].innerHTML=`${arrNames[0]} &#183; ${arrData[0]}`;

        let  imgc = document.createElement('img');    
        imgc.src = arrAvatar[2];
        imgc.classList = 'fit2';  
        document.getElementsByClassName('third2')[0].appendChild(imgc);
        document.getElementsByClassName('third3')[0].innerHTML=`${arrNames[2]} &#183; ${arrData[2]}`;

        let list =document.getElementById('order');
            let imgd;
            let spana;
            let spanb;
            let spanc ;
            let spand ;
            let spane ;
            let diva;
            let lis ;

        for (let i = 3; i < data.length; i++) {
            
            imgd = document.createElement('img');
            spana = document.createElement('span');
            spanb = document.createElement('span');
            spanc = document.createElement('span');
            spand = document.createElement('span');
            spane = document.createElement('span');
            diva=document.createElement('div');
            lis = document.createElement('li');

            let player = arrNames[i];
            let point = arrData[i];
            let avatar = arrAvatar[i];
            imgd.src = avatar;
            imgd.classList = 'fit';

            spana.textContent = i + 1;
            spana.classList = 'num';
            spanb.classList = 'shape';
            spanc.textContent = player;
            spanc.classList = 'name';
            spand.textContent = point;
            spand.classList = 'score';
            spane.classList = 'dot1';
            diva.style="text-align:left";
            
            spane.appendChild(imgd);
            spanb.appendChild(spane);
            spanc.appendChild(diva);
            lis.appendChild(spana);
            lis.appendChild(spanb);
            lis.appendChild(spanc);
            lis.appendChild(spand);            
                      
            list.append(lis);
            list.append(document.createElement('br'));
            
        }
     })
    .catch(error => {
        console.error(error);
    });