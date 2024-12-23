import nodemailer from "nodemailer"
import publicacoesInrMail from "../../config/publicacoesInrMail"
import epicquesttiMail from "../../config/epicquesttiMail"

export const publicacoesInrTransporter =
  nodemailer.createTransport(publicacoesInrMail)

export const epicquesttiTransporter =
  nodemailer.createTransport(epicquesttiMail)
