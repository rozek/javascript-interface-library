//----------------------------------------------------------------------------//
//                        JavaScript Interface Library                        //
//----------------------------------------------------------------------------//

namespace JIL {
/**** get a reference to the "global" object ****/

  export const global = Function('return this')()
// see https://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript


}

export default JIL
