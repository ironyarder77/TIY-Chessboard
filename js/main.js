pawn=bp,wp
rook=br,wr
knight=bk,wk
bishop=bb,wb
queen=bQ,wQ
king=bK,wK

var board = initial();
applyMove: function(from, to){

}

//this is my array setup for the default position chessboard. I was unable to move beyond this point not b/c
//a lack of understanding conceptually but rather my blocker rests in my lack of javascript knowledge                                                            
[
["br","bk","bb","bQ","bK","bb","bk","br"]
["bp","bp","bp","bp","bp","bp","bp","bp"]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["wp","wp","wp","wp","wp","wp","wp","wp"]
["wr","wk","wb","wQ","wK","wb","wk","wr"]

]

[6, 4, 4, 4]

[
["br","bk","bb","bQ","bK","bb","bk","br"]
["bp","bp","bp","bp","bp","bp","bp","bp"]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["wp","wp","wp","wp","wp","wp","wp","wp"]
["wr","wk","wb","wQ","wK","wb","wk","wr"]

]
[
["br","bk","bb","bQ","bK","bb","bk","br"]
["bp","bp","bp","bp","bp","bp","bp","bp"]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["wp","wp","wp","wp","wp","wp","wp","wp"]
["wr","wk","wb","wQ","wK","wb","wk","wr"]

]
[
["br","bk","bb","bQ","bK","bb","bk","br"]
["bp","bp","bp","bp","bp","bp","bp","bp"]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["wp","wp","wp","wp","wp","wp","wp","wp"]
["wr","wk","wb","wQ","wK","wb","wk","wr"]

]
[
["br","bk","bb","bQ","bK","bb","bk","br"]
["bp","bp","bp","bp","bp","bp","bp","bp"]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["", "", "", "", "", "", "", ""]
["wp","wp","wp","wp","wp","wp","wp","wp"]
["wr","wk","wb","wQ","wK","wb","wk","wr"]

]















(function(globals){ // IIFE: Immediately Invoked Function Expression
})(window || module && module.exports || this);

(function(globals){ // IIFE: Immediately Invoked Function Expression
// Don't worry if that seems a little funky...

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
  var moves = [
    // TODO: Fill me in!
  ]; // END moves

  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = (globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
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
    next: function(){
      // Doesn't this seem to be missing something?
      return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      // Another good place for code...
      return this;
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
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }

      return bullet;
    },
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
    applyMove: function(from, to){
      // You should write something in here...
    } // END applyMove
  }); // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
