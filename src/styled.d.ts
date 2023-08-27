import "twin.macro";
import styledImport from "@emotion/styled";

declare module "twin.macro" {
  const styled: typeof styledImport;
  const css: typeof styledImport;

  interface StyledComponent<As = "div"> {
    (props: any): any;
    <As2 = As>(props: { as: As2 } & any): any;
  }
}
