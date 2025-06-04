window.openModal = function(text) {
    let modal = document.getElementById('myModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'myModal';
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 hidden';
  
      let inner = document.createElement('div');
      inner.className = 'bg-white p-6 rounded-lg max-w-md w-full shadow-lg';
  
      let p = document.createElement('p');
      p.id = 'modalText';
      p.className = 'mb-4 text-gray-800';
  
      let btn = document.createElement('button');
      btn.innerText = 'Close';
      btn.className = 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700';
      btn.onclick = function() {
        modal.classList.add('hidden');
      };
  
      inner.appendChild(p);
      inner.appendChild(btn);
      modal.appendChild(inner);
      document.body.appendChild(modal);
    }
    document.getElementById('modalText').innerText = text;
    modal.classList.remove('hidden');
  };
  