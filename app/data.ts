

interface story {
    story_name:string,
    features:features
    
}

interface features {
    features_name:string,
}

interface projects {
    project_name:string,
    story:story
}




let projects : projects[] =[
{
    project_name:'project1',
    story:{story_name:"story1",features:{features_name:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s wiand more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}}
},
{
    project_name:'project1',
    story:{story_name:"story2",features:{features_name:"Lorem Ipsum PageMaker including versions of Lorem Ipsum"}}
},
{
    project_name:'project1',
    story:{story_name:"story3",features:{features_name:" Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}}
},
{
    project_name:'project1',
    story:{story_name:"story4",features:{features_name:". Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}}
},
{
    project_name:'project2',
    story:{story_name:"story5",features:{features_name:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus"}}
},
{
    project_name:'project2',
    story:{story_name:"story6",features:{features_name:"th the release of Letraset sheets containing Lorem Ipsum passages, "}}
},
{
    project_name:'project2',
    story:{story_name:"story7",features:{features_name:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"}}
},
{
    project_name:'project2',
    story:{story_name:"story8",features:{features_name:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}}
},
]

export {projects}
