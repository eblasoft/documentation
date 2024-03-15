# Formula

The Formula feature in Ebla AI allows you to create custom formula functions that can be used in various parts of the
CRM. These functions can be used to perform calculations, manipulate data, and automate tasks. Which enables you to
create complex and intelligent formulas that can be used to enhance your CRM operations.

## Using Formula

Format of function use: `eblaAi\textGenerate([propmt], profileId)`.

!!! example

    ```
        $prompt = string\concatenate('Calculate score of this profile,',
        ' name is: ', name,
        ' email is: ', emailAddress,
        ' industry is: ', industry,
        ' source is: ' , source,
        ' country is: ' , addressCountry,
        '. Provide result as number between 0-4 without explainations'
        );
        
        $profileId = '65d6f98d3d0f9f5f9';
        
        score = eblaAi\textGenerate($prompt, $profileId);
    ```

`Output Example: Calculate score of this profile, name is: Marry Coch email is: marry@gmail.com industry is: Banking source is: Web Site country is: Germany. Provide result as number between 0-4 without explainations`

!!! important

    If output is not as expected, you can click on **Send** button to regenerate the output.