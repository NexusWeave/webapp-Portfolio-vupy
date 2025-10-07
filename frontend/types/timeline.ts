//  Types for the project

export interface TimelineItem
    {
        description?: string | undefined,
        title?: string | undefined,
        tech_stack?: Array<string> | undefined,

        date: 
        {
            created: string,
            end?: string | undefined,
            updated?: string | undefined,
        },

        location: 
        {
            name: string,
            anchor:
            {
                type: string,
                href?: string | undefined,
            }
        },
        organization: 
        {
            name: string,
            anchor:
            {
                type: string,
                href?: string | undefined,
            }
        },
        reference:
        {
            name: string,
            anchor:
            {
                type: string,
                href?: string | undefined,
            }
        },

        range?:
        {
            
            type: string,
            name: string,
            value: string,
            rangeMax: number,
        }
    }