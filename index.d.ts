/** Declaration file generated by dts-gen */

type GraphQLAssemblerError = {
  name: string;
  error: string;
};

type Resolvers = {
  [key: string]: any;
};

type GraphQLBundle = {
  typeDefs: string | null;
  resolvers: Resolvers | null;
  errors: GraphQLAssemblerError[] | null;
};

export = simple_graphql_assembler;

declare function simple_graphql_assembler(root: any): GraphQLBundle;
