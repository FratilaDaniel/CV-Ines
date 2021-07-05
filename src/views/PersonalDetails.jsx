import ExperienceCard from "./ExperienceCard";

const WORK_EXPERIENCE = [{
    deco: false,
    title: "UTCN",
    content: ["Computer", "Science"]
},{
    deco: true,
    title: "",
    content: []
},{
    deco: false,
    title: "BOSCH",
    content: ["Blender3d", "VR dev", "Unreal Engine 4", "Unity 3D"]
}];

function PersonalDetails(){
    return (
        <div className="details-container">
            <h1>about me</h1>
            <div className="details-text-img-container">
                <div className="details-text-container">
                    <p>Aliqua tempor ex fugiat ipsum dolor dolore proident et excepteur ad tempor. Exercitation sunt labore in magna aliqua nulla ipsum. Cupidatat commodo incididunt pariatur ex aliquip culpa laborum aliquip. Sint et ad excepteur mollit qui commodo duis ullamco magna. Dolor eiusmod ipsum qui qui in qui laboris et exercitation excepteur ad ut proident anim. Aliquip aute deserunt sint laboris duis duis mollit nisi dolor aliquip.</p>
                    <p>Cupidatat sint est est adipisicing incididunt esse in irure aliquip fugiat est labore. Et ut est nostrud velit mollit pariatur ullamco nisi in. Ad voluptate eu velit occaecat. Dolore in consequat in eiusmod consectetur minim veniam ea ea.</p>
                </div>
                <img src="better_berd.png" alt=""/>
            </div>
            <div className="experience-card-container">
                {WORK_EXPERIENCE.map(item => {
                    let cardClassName = "experience-card";
                    if(item.deco){
                        cardClassName = "line-deco";
                    }
                    return (
                            <ExperienceCard 
                                cardClassName={cardClassName}
                                title={item.title} 
                                content={item.content}/>
                    );
                })}
            </div>
        </div>
    );
}

export default PersonalDetails;
