/**
* Module - Kiwi (Core)
* @module Kiwi
* 
*/

module Kiwi {

    /**
    * My method description.  Like other pieces of your comment blocks, 
    * this can span multiple lines.
    *
    * @class Camera
    * 
    */
    export class Camera {

        /**
		* 
        * @constructor
        * @param {Kiwi.Game} game 
        * @param {Number} id 
        * @param {String} name
        * @param {Number} x
        * @param {Number} y
        * @param {Number} width
        * @param {Number} height
        * @return {Kiwi.Camera}
		**/
        constructor(game: Kiwi.Game, id: number, name: string,x:number,y:number,width:number,height:number) {

            this._game = game;
            this.id = id;
            this.name = name;
            
            //size could autoresize to fit stage
            this.width = width;
            this.height = height;
            this.transform = new Kiwi.Geom.Transform(x, y);
            this.transform.rotPointX = x + width / 2;
            this.transform.rotPointY = y + height / 2;

            
            this._game.stage.onResize.add(this._updatedStageSize, this);
            this._game.stage.onResize.add(this._updatedSize, this); 
        
        }

        /**
        * The width of this camara.
        * @property width
        * @type Number
        */
        public width: number;
        
        /**
        * The height of this camera.
        * @property height
        * @type Number
        */
        public height: number;

        /**
        * The type of Kiwi.Object this is.
        * @method objType
        * @return {String}
        */
        public objType() {
            return "Camera";
        }

        /**
        * if true then the camera will be resized to fit the stage when the stage is resized
        */
        public fitToStage: boolean = true;

        /** 
	     * The Position component that controls the location of this Game Object within the game world
	     * @property position
	     * @type Kiwi.Components.Position
	     **/
        public transform: Kiwi.Geom.Transform;

        /**
		* 
        * @method _updatedStageSize
        * @param {Number} width
        * @param {Number} height
		**/
        private _updatedStageSize(width: number, height: number) {

            
            this.width = width;
            this.height = height;
          

        }

        /**
		* 
        * @method _updatedStageSize
        * @param {Number} width
        * @param {Number} height
		**/
        private _updatedSize(width: number, height: number) {
           /* this._game.stage.domLayersMask.style.width = width + "px";
            this._game.stage.domLayersMask.style.height = height + "px";
            this._resizeCompositeCanvas();
            for (var i = 0; i < this._game.layers.layers.length; i++) {
                var layer: Kiwi.Layer = this._game.layers.layers[i];
                layer.domContainer.style.width = width + "px";
                layer.domContainer.style.height = height + "px";
               

            }
           */
        }



        /**
        * The game this Group belongs to
        * @property game
        * @type Game
	    */
        public _game: Kiwi.Game;

        
        /**
        * A unique identifier for this Layer within the game used internally by the framework. See the name property for a friendly version.
        * @property id
        * @type number
    	*/
        public id: number;

        /**
        * A name for this Camera. This is not checked for uniqueness within the Game, but is very useful for debugging.
        * @property name
        * @type string
    	*/
        public name: string;

       
        
        /**
		* Controls whether this Camera is rendered
        * @property _visible
        * @type boolean
		*/
        private _visible: boolean;

        /**
		* Toggles the visible state of this Camera
        * @method visible
        * @param {boolean} value
        * @return {boolean}
		**/
        public visible(value: boolean = null): boolean {

            
            return this._visible;

        }

        /**
		* 
        * @property _dirty
        * @type boolean
        * @private
		**/
        private _dirty: boolean;

        /**
		* A value used by components to control if the camera needs re-rendering
        * @method dirty
        * @param {boolean} value
        * @return {boolean}
    	*/
        public dirty(value: boolean = null): boolean {

            if (value !== null) {
                this._dirty = value;
            }

            return this._dirty;

        }

        public update() {
            
            //this.components.update();
            
        }

        public render() {
            
            this._game.renderer.render(this);

        }

            



        
        }

    }

