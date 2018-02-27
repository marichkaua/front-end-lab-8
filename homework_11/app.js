var rootNode = document.getElementById("root");
//----------------------------------------------
var treeNode = (function tree(data) {
    var parent = document.createElement('ul');
    parent.classList.add('tree');

    var clickHandler = function(event) {
        event.stopPropagation();
        var classList = event.target.classList;
        if (classList.contains('is-folder')) {
            classList.toggle('is-open');
            event.target.children[0].textContent = classList.contains('is-open') ? 'folder_open' : 'folder';
        }
    };

    data.forEach(function(item) {
        var child = document.createElement('li');
        icon = document.createElement('i');
        isFolder = item.hasOwnProperty('children');
        title = document.createTextNode(item.title);

        icon.classList.add('material-icons');
        child.append(icon);

        child.appendChild(title);

        if (isFolder) {
            child.classList.add('is-folder');
            icon.textContent = 'folder';
        } else {
            icon.textContent = 'insert_drive_file';
        }

        if (isFolder) {
            if (Array.isArray(item.children) && item.children.length) {
                var subfolder = tree(item.children);
                child.appendChild(subfolder);
            } else {
                child.classList.add('is-empty');
            }
            child.addEventListener('click', clickHandler);
        }
        parent.appendChild(child);
    });
    return parent;

})(structure);
//----------------------------------------------
rootNode.appendChild(treeNode);

