this is for controller code
JavaScript Controllers for Chessboard exercise
(function(globals){
// Don't worry if that seems a little funky...
//THIS IS MY ATTEMPT AT WRITING THE CONTROLLER CODE OR SOME TYPE THEREoF
apply move()

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  //NOT SURE WHY I DIDN'T LABEL THE ACTUAL GRID STARTING WITH ZERO
  var moves = [
    [6,3,4,3],[0,6,2,5],[6,2,4,2],,[1,4,2,4],[6,6,5,6]
  ]; // END moves

  // var current; TODO: do we need this?
  //MATT: Is this talking about a counter?

  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
      return [
    []"br","bk","bb","bQ","bK","bb","bk","br"],
    ["bp","bp","bp","bp","bp","bp","bp","bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp","wp","wp","wp","wp","wp","wp","wp"],
    ["wr","wk","wb","wQ","wK","wb","wk","wr"],
  ]
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();

      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
  Advance: function(){
      // Doesn't this seem to be missing something?
      return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
  Retreat: function(){
      // Another good place for code...
      return this;
    //try this?  Advance: function(--)
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // Write some code here...
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
//not sure if this is where the tracer goes:

    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += board[rank][file] || ' |';
        }
        bullet += '\n';
      }

      return bullet;
    },

    var board = initial();
    applyMove: function(from, to){
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    function applyMove(from, to){
      // You should write something in here...
    } // END applyMove
  }; // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'br', 'bk', 'bb', 'bQ', 'bK', 'bb', 'bk', 'br' ],
      [ 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp' ],
      [ 'wr', 'wk', 'wb', 'wQ', 'wK', 'wb', 'wk', 'w r' ],
    ];
  }
  //OR MY ORIGINAL ONE WHICH IS LAID OUT WITH EMPTY SPACES RATHER HAN NULL
  function initial(){
    return [
  []"br","bk","bb","bQ","bK","bb","bk","br"],
  ["bp","bp","bp","bp","bp","bp","bp","bp"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["wp","wp","wp","wp","wp","wp","wp","wp"],
  ["wr","wk","wb","wQ","wK","wb","wk","wr"],
]
 // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
