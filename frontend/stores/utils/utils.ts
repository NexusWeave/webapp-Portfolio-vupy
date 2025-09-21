const codeExtensions:(string[]) =
[
    //frontend
    'js', 'html', 'css',

    // Backend
    'py', 'c', 'cs', 
    
    //  Workflow
    'cms', 'git', 'sass', 'agile'];

export const fetchExtensionType = (element:string): string[] =>
{
    element = element.toLowerCase();

    const c = ['.net']
    if (element in c) element == 'cs' 

    if (!!codeExtensions.filter(ext => element.endsWith(ext))) return codeExtensions.filter(ext => element.endsWith(ext))
    
    return []
}