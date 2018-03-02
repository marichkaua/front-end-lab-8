var rootNode = document.getElementById('root');
//----------------------------------------------
var tanksList = (function tree(tanks) {
    var parent = document.createElement('div');
    parent.classList.add('thumbnails');
    var headline = document.createElement('h1');
    headline.innerHTML = 'Most popular tanks';
    parent.appendChild(headline);
    var container = document.createElement('div');
    container.className = 'container';

    tanks.forEach(function(item) {
        var containerItem = document.createElement('a');
        var child = document.createElement('div');
        var tankImg = document.createElement('img');
        var flag = document.createElement('img');
        containerItem.className = 'container-item';
        flag.className = 'country-flag';
        tankImg.className = 'tank-img';

        var box = document.createElement('div');
        var h4 = document.createElement('h4');
        var p = document.createElement('p');
        p.innerHTML = item.level;
        h4.innerHTML = item.model;
        box.appendChild(p);
        box.appendChild(h4);
        box.className = 'model';

        flag.src = item.country_image;
        tankImg.src = item.preview;
        child.appendChild(tankImg);
        child.appendChild(h4);
        h4.appendChild(flag);
        containerItem.appendChild(child);
        container.appendChild(containerItem);
        parent.appendChild(container);

        child.addEventListener('click', () => location.hash = item.model);

    });
    return parent;

})(tanks);

function details(tank) {

    var details = tank.details;
    return ` <div class="details">

    <div class="mainInfo">
      <h1>
        <img class="flag" src="images/countries/${infoDate.country}.png" title="${infoDate.country}"/>${infoDate.model} (level ${infoDate.level})
      </h1>
       <span class="preview">Preview</span>
       <img class="detflag" src="${infoDate.preview}">
       <span class="back">Back to list view</span>
       </div>
      <div class="tableInfo">
      <h1 class="preTable">Characteristic</h1>
       <table>
        <tr>
            <th>
                damage
            </th>
            <th>
                ${details.damage}

            </th>
        </tr>
                <tr>
            <th>
                breoning
            </th>
            <th>
                ${details.breoning}

            </th>
        </tr>
          <tr>
           <th>
               attack speed
            </th>
            <th>

                ${details.attack_speed}

            </th>
        </tr>
        <tr>
           <th>
                time of targeting
            </th>
            <th>
                ${details.time_of_targeting}

            </th>
        </tr>
         <tr>
           <th>
               ammunition
            </th>
            <th>
                ${details.ammunition}

           </th>
        </tr>
       </table>
      </div>
   </div>`

}

function tankDetails() {
        var tModel = location.hash.slice(1);

        tanks.forEach(function(item) {
            if (item.tModel === tModel) {
                rootNode.innerHTML = details(item);
            }
        });

        var returnW = document.getElementsByClassName('return');

        containerItem.addEventListener('click', () => {
            window.location.hash = '';
            window.history.go();
        });
    }
    //----------------------------------------------
rootNode.appendChild(tanksList);
window.onhashchange = tankDetails;
