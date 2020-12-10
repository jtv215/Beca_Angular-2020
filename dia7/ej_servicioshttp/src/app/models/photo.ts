export class Photo{
    constructor(
        public albumId: number,
        public id: number,
        public title: String,
        public url: String,
        public thumbnailUrl: String,        
    ){}
}