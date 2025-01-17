mod cargo;
mod npm;
mod pipenv;

use anyhow::Result;
use clap::{Parser, ValueEnum};

use crate::commands::setup::cargo::setup_cargo;
use crate::commands::setup::npm::setup_npm;
use crate::commands::setup::pipenv::setup_pipenv;
use crate::utils::{ClapExtensions, OrderedCommand, Terminal};

#[derive(Clone, Debug, Default, Parser)]
pub struct SetupController {
    #[clap(trailing_var_arg = true)]
    commands: Vec<SetupCommand>,
}

impl SetupController {
    pub fn execute(&self) -> Result<()> {
        SetupCommand::execute_in_order(&self.commands)
    }
}

#[derive(Clone, Debug, Eq, Ord, PartialEq, PartialOrd, ValueEnum)]
enum SetupCommand {
    /// Install Cargo dependencies.
    Cargo,
    /// Install NPM dependencies.
    Npm,
    /// Install Pipenv dependencies.
    Pipenv,
}

impl OrderedCommand for SetupCommand {
    fn execute(&self) -> Result<()> {
        Terminal::step(format!("setup {name}", name = self.clap_name()));

        match self {
            SetupCommand::Cargo => setup_cargo(),
            SetupCommand::Npm => setup_npm(),
            SetupCommand::Pipenv => setup_pipenv(),
        }
    }
}
