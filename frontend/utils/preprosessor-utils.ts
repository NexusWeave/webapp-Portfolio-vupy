
//  --- Import & types logic
import type { TimelineItem } from '@/types/timeline';
import type { AcademicCollectionItem } from '@nuxt/content';


//  --- Data Fetching Logic
export async function fetchCollection(path:any, cacheKey:string): Promise<AcademicCollectionItem[]>
{
    const {data: document_info} = await useAsyncData(cacheKey, () => 
    {return queryCollection(path).all();});
    
    // --- Debugging
    // console.log("FetchCollection - Path:", path);
    // console.log("FetchCollection - Data:", document_info.value);
    
    if(document_info.value) return document_info.value; else return [];
}

//  --- Data Processing Logic
export function sortCollection(data: AcademicCollectionItem[]): AcademicCollectionItem[]
{
    return data.sort((a, b) =>
        {
            const A = new Date(a.created).getTime();
            const B = new Date(b.created).getTime();
            return A - B; // Sort descending
        });
}

export function mapTimeline(data: AcademicCollectionItem[]) : TimelineItem[]
{
    let AUTOINCREMENT:number = 0;

    const timeline = sortCollection(data);

    return timeline.map((doc:AcademicCollectionItem) => {
        return{
            id: AUTOINCREMENT++,
            body: doc.body || undefined, name: doc.tag + "-Timeline",
            title: doc.title || undefined, isVisible: AUTOINCREMENT - 1 == 0,
            techStack: fetchTechType(doc.techStack), description: doc.description || undefined,

            date:
            {
                created: doc.created,
                updated: doc.updated,
                end: doc.end,
            },

            organization: 
            {
                name: doc.organization,
                anchor: 
                {
                    label: doc.organization,
                    href: doc.org_link || undefined,
                    type: doc.org_link ? 'external' : undefined
                }
            },

            location:
            {
                name: doc.location,
                anchor:
                {
                    label: doc.location,
                    href: doc.loc_link || undefined,
                    type: doc.loc_link ? 'external' : undefined
                }
            },

            reference:
                {
                    name: doc.reference,
                    anchor:
                    {
                        label: doc.reference,
                        href: doc.ref_link || undefined,
                        type: doc.ref_link ?'external': undefined
                    }
            },
            } as TimelineItem;
        }
    );
};
