//  Academic Timeline Store

import { reactive } from "vue";
import { defineStore } from "pinia";
import { fetchExtensionType} from "../utils/utils";
//import { fetchData } from "../utils/response.js";
import { academic } from "../content/academic/academic.json"
interface Anchor
{
    label: string;
    type: string[]
}

interface Content {
    name:string;
    anchor: Anchor;
    [key:string]: any;
}

interface Item
{
    
    tech: []
    end: Date,  
    id: Number;
    start: Date,
    body: string;
    title: string;
    location: string;
    loc_link: string;
    isVisible: boolean;
    institution: string;
    institution_link: string;
    field: Record<string, any>
}

interface ItemV2
{
    
    name:string;
    href: string;
    tech: string[]
    list: string[]
    summary: string
    created: string;
    data: Record<string,any>;
    [key:string]: any;
    // content : Content[]
    
}

interface Data
{
    timeline:Item[]
    isLoaded: boolean;
}

interface State
{
    data: Data

}

interface TechItems
{
    label: string;
    type: string[];
}

export const academicStore = defineStore("Academic",
    {
        state:(): State => ({
            data:
            {
                timeline: [],
                isLoaded: false,
                
            }
        }),
        actions:
        {
            addToStore(item:Item)
            {
                this.data.timeline.push(item);
                //console.warn("Adding data to store:", item);
            },
            toggleVisibility(id:Number)
            {
                const data = this.data.timeline;
                data.forEach(item => 
                {
                    if (item.id == id) {
                        item.isVisible = true
                        //console.log(item.id, item.isVisible)
                    } else {item.isVisible = false
                        //console.log(item.id, item.isVisible)
                    }
                    
                }
                )
            },
            async fetchData()
            {
                const data = this.data
                if (data.isLoaded) return;

                await fetchData().then(async () =>
                    {
                    //const json = await fetch('services/academic-api.json');   
                    //const jsonData = await json.json();

                    academic.forEach(element => { this.addToStore(element)});
                    this.data.isLoaded = true;

                }).catch((error) => {
                    console.error("Error fetching timeline data:", error);
                    this.data.isLoaded = false;
                });
            },
        },
        getters: {
            isLoaded: (state) => state.data.isLoaded,
            timelines: (state) =>
                {
                return state.data.timeline.map(item =>
                ({
                    title: item.title,
                    id: generateHexID(),
                    name: item.institution,
                    isVisible: item.id == 0,                    
                    body: {body:item.body, list:[]},
                    location: { href: item.loc_link, label: item.location},
                    date: { end: new Date(item.end), start: new Date(item.start)},

                    institution: 
                    { 
                        label: item.institution, 
                        href: item.institution_link
                    },

                    tech : item.tech.flatMap(element =>
                        {
                            const ext = fetchExtensionType(element);
                            if (!!ext) {return [{label: element, type: ext }]} else {return []}
                        })
                })
            )},
            range : (state) =>
            {
                const n = 1;
                const data = reactive({});
                const timeline = state.data.timeline;

                data.field = 
                {
                    value: '0',
                    type: 'range',
                    name: "akademic-timeline",
                    title: 'Akademisk Tidslinje',
                    rangeMax: timeline.length - n,
                }
                return data;

            },
        },  
});