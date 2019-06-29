window.onload = () => {
  new Vue({
    el: '#app',
    data: {
      input: '',
      busy: false,
      limit: 5,
      todos: [
        { text: '🐯 Learn JavaScript', checked: false },
        { text: '🐹 Learn Vue', checked: false },
        { text: '🐀 Build something awesome', checked: false }
      ]
    },
    methods: {
      addTodo: function() {
        if (this.input !== '') {
          this.todos = [...this.todos, { text: this.input, checked: false }];
          this.input = '';
        }
      },
      check: function(i) {
        if (!this.busy) {
          this.todos[i].checked = !this.todos[i].checked;
        }
      },
      delTodo: function(i) {
        this.busy ? '' : this.todos.splice(i, 1);
      },
      edit: function(e) {
        this.busy = true;
        e.target.classList.toggle('hide');
        e.target.nextElementSibling.classList.toggle('hide');
      },
      toggleEdit: function(e) {
        this.busy = false;
        let el = e.target.parentNode;
        el.classList.add('hide');
        el.previousElementSibling.classList.remove('hide');
      },
      fetchTodo: function() {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(
            json =>
              (this.todos = json
                .map(j => ({ text: j.title, checked: j.completed }))
                .slice(0, this.limit))
          );
      }
    },
    updated() {
      window.componentHandler.upgradeDom();
    },
    mounted() {
      this.fetchTodo();
    }
  });

  var dialog = document.querySelector('dialog');
  dialog.showModal();
  document.querySelector('.dialog-close').onclick = () => dialog.close();
};
