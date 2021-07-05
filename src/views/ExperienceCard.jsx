
function ExperienceCard({cardClassName, title, content}){
    return (
        <div className={cardClassName}>
            <h2>{title}</h2>
            <hr/>
            <div>
                {content.map(item => {
                    return (<p>{item}</p>);
                })}
            </div>
        </div>
    );
}

export default ExperienceCard;
