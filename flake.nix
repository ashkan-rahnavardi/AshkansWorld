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
        # define an alias
        alias yd='yarn dev'
        # or as a shell function (uncomment if you prefer)
        # yd() { yarn dev; }
      '';
    };
  };
}
# {
#   description = "NextJS development environment using Nix flakes";
#
#   ### add your zsh‐options flake as an input ###
#   inputs = {
#     nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
#     # zsh-flake.url = ../../.dotfiles/modules/home-manager/programs/zsh;
#     zsh-flake.url = "path:/home/ash/.dotfiles/modules/home-manager/programs/zsh/";
#
#     # waybar-google-calendar.url = "path:/home/ash/nixmod/waybar-google-calendar/";
#   };
#
#   outputs = {
#     self,
#     nixpkgs,
#     zsh-flake,
#   }: let
#     system = "x86_64-linux";
#     pkgs = import nixpkgs {inherit system;};
#     # turn the zsh flake into a path
#     myZsh = zsh-flake;
#   in {
#     devShell.${system} = pkgs.mkShell {
#       buildInputs = [
#         pkgs.nodejs
#         pkgs.yarn
#         pkgs.zsh # make sure zsh is available
#       ];
#
#       shellHook = ''
#         echo "Welcome to your NextJS flake development shell!"
#         # use zsh as login shell
#         export SHELL=${pkgs.zsh}/bin/zsh
#         # source all your zsh opts:
#         if [ -f "${myZsh}/zshrc" ]; then
#           source "${myZsh}/zshrc"
#         fi
#
#         # still keep the handy yd alias
#         alias yd='yarn dev'
#       '';
#     };
#   };
# }
# {
#   description = "NextJS development environment using Nix flakes";
#
#   inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
#
#   outputs = {
#     self,
#     nixpkgs,
#   }: let
#     system = "x86_64-linux";
#     pkgs = import nixpkgs {inherit system;};
#   in {
#     devShell.${system} = pkgs.mkShell {
#       buildInputs = [
#         pkgs.nodejs
#         pkgs.yarn
#       ];
#
#       shellHook = ''
#         echo "Welcome to your NextJS flake development shell!"
#       '';
#     };
#   };
# }

