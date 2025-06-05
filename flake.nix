{
  description = "NextJS development environment using Nix flakes";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
  in {
    devShell.${system} = pkgs.mkShell {
      buildInputs = [
        pkgs.nodejs
        pkgs.yarn
      ];

      shellHook = ''
        echo "Welcome to your NextJS flake development shell!"
      '';
    };
  };
}
